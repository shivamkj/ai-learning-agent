"""Convert PDF to Markdown using docling."""

import argparse
import sys
from pathlib import Path


def convert_pdf_to_markdown(input_path: Path, output_path: Path) -> bool:
    try:
        from docling.datamodel.base_models import InputFormat
        from docling.datamodel.pipeline_options import PdfPipelineOptions
        from docling.document_converter import DocumentConverter, PdfFormatOption

        output_path.parent.mkdir(parents=True, exist_ok=True)

        pipeline_options = PdfPipelineOptions(
            do_ocr=False,
            do_table_structure=True,
            generate_picture_images=False,
        )

        converter = DocumentConverter(
            format_options={
                InputFormat.PDF: PdfFormatOption(pipeline_options=pipeline_options)
            }
        )
        result = converter.convert(str(input_path))

        markdown_content = result.document.export_to_markdown()

        with open(output_path, "w", encoding="utf-8") as f:
            f.write(markdown_content)

        print(f"Converted: {input_path.name} -> {output_path.name}")
        return True

    except Exception as e:
        print(f"ERROR converting {input_path}: {e}", file=sys.stderr)
        return False


def main():
    parser = argparse.ArgumentParser(description="Convert PDF to Markdown using docling")
    parser.add_argument("--input", type=str, required=True)
    parser.add_argument("--output", type=str, required=True)
    args = parser.parse_args()

    input_path = Path(args.input)
    output_path = Path(args.output)

    if not input_path.exists():
        print(f"Input file not found: {input_path}", file=sys.stderr)
        sys.exit(1)

    success = convert_pdf_to_markdown(input_path, output_path)
    sys.exit(0 if success else 1)


if __name__ == "__main__":
    main()
