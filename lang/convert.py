import pandas as pd

def main():
    df = pd.read_csv('all.csv')

    for col in df.columns:
        f = open(f'{col}.json', 'w+')

        f.write('{\n')

        for i, v in enumerate(df[col]):
            f.write(
                '\t"{}": "{}"'
                    .format(
                        df['Unnamed: 0'][i],
                        v
                    )
            )
    


if __name__ == '__main__':
    main()