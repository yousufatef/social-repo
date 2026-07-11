module.exports = (rows) => {
    return rows.map((row) => {
        const camelCaseRow = {};

        for (const key in row) {
            const camelCaseKey = key.replace(
                /_([a-z])/g,
                (_, letter) => letter.toUpperCase()
            );

            camelCaseRow[camelCaseKey] = row[key];
        }

        return camelCaseRow;
    });
};