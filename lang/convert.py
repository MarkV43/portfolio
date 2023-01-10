import pandas as pd
from math import isnan

def main():
    df = pd.read_csv('all.csv')

    f = open("langs.json", "w+")
    f.write('{}'.format(str(list(df.columns[1:])).replace("'", '"')))

    for col in df.columns[1:]:
        f = open(f'{col}.json', 'w+')

        f.write('{')

        for i, v in enumerate(df[col]):
            if i > 0:
                f.write(',')
            if type(v) is float and isnan(v):
                v = 'null'
            else:
                v = '"{}"'.format(v)
            f.write(
                '\n\t"{}": {}'
                    .format(
                        df['Unnamed: 0'][i],
                        v
                    )
            )
        f.write('\n}')
    


if __name__ == '__main__':
    main()