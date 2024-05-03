const currentDate = new Date();
const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
const shortDate = currentDate.toLocaleDateString('en-US', options);

export function HomePage() {
    return(
        <div class="mt-5 ml-5">
            {shortDate}
        </div>
    );
};

