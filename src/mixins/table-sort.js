export default {
    data() {
        return {
            currentSortedColumn: "",
            sortCounter: 0,
            sortTypes: ["noSort", "ascending", "descending"],
        }
    },

    methods: {
        sortByColumn(columnName) {
            this.setSortCounter(columnName);

            this.currentSortedColumn = columnName;

            this.sortBy();
        },

        setSortCounter(columnName) {
            this.sortCounter++;

            if (this.currentSortedColumn == columnName) {
                if (this.sortCounter >= 3) {
                    this.sortCounter = 0;
                }

                return;
            }

            this.sortCounter = 1;
        },
    }
}