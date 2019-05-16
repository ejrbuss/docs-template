import _ from 'lodash';

const MAX_PREVIEWS = 3;

export default class Page {

    constructor(data) {
        Object.assign(this, data);
        this.date = new Date(this.date);
    }

    $search(searchText) {
        const regex = new RegExp(_.escapeRegExp(_.escape(searchText)), 'i');
        return this.$searchRegex(regex);
    }

    $searchRegex(regex) {
        if (this.title && regex.test(this.title)) {
            return true;
        }
        if (this.subtitle && regex.test(this.subtitle)) {
            return true;
        }
        if (this.$formattedDate && regex.test(this.$formattedDate)) {
            return true;
        }
        if (this.plainTxt && regex.test(this.plainTxt)) {
            return true;
        }
        return false;
    }

    $previews(searchText) {
        const regex    = new RegExp(`(${_.escapeRegExp(_.escape(searchText))})`, 'gi');
        const lines    = [this.title || '', this.subtitle || '', this.$formattedDate || '', ...this.plainTxt.split('\n')];
        const previews = [];

        for (const line of lines) {
            if (regex.test(line)) {
                previews.push(<span dangerouslySetInnerHTML={{
                    __html: line.replace(regex, `<mark>$1</mark>`) + '...',
                }} />)
            }
        }
        if (previews.length > MAX_PREVIEWS) {
            previews[MAX_PREVIEWS + 1] = `${previews.length - MAX_PREVIEWS} more results...`;
        }
        return previews.slice(0, MAX_PREVIEWS + 2);
    }

    get $day() {
        return this.date.getUTCDate();
    }

    get $month() {
        return this.date.getUTCMonth();
    }

    get $year() {
        return this.date.getUTCFullYear();
    }

    get $formattedDate() {
        const months = [
            'January', 
            'February', 
            'March', 
            'April', 
            'May', 
            'June', 
            'July', 
            'August', 
            'September', 
            'October', 
            'November', 
            'December',
        ];
        if (isNaN(this.$month) || isNaN(this.$day) || isNaN(this.$year)) {
            return false;
        }
        return `${months[this.$month]} ${this.$day} ${this.$year}`;
    }

}

Page.compareDates = (page1, page2) => {
    return page2.date - page1.date;
};