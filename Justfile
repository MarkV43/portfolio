alias s := serve
alias cl := convert-langs

serve:
    npm run dev

convert-langs:
    cd lang && ../.venv/bin/python convert.py