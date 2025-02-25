(function() {

    const DateTime = luxon.DateTime;

    
    const birthdate = DateTime.fromISO("1998-07-16"); 
    const now = DateTime.now();
    const daysDifference = now.diff(birthdate, 'days').days;
    
    const yearsMonthsDays = now.diff(birthdate, ['years', 'months', 'days']).toObject();
    const years = yearsMonthsDays.years.toFixed(0); 
    const months = yearsMonthsDays.months.toFixed(0); 
    const days = yearsMonthsDays.days.toFixed(0); 

    const date1 = DateTime.fromISO("2024-12-25"); 
    const date2 = DateTime.fromISO("2025-02-01"); 
    const closestDate = (date1 > now && date1 < date2) ? date1 : date2;

    const comparisonResult = date1 < date2 ? 'Date1 is before Date2' : 'Date1 is after Date2';

    const londonTime = now.setZone('Europe/London').toLocaleString(DateTime.TIME_SIMPLE);

    let results = `
      <p>1. Number of days between your birthdate and current date: ${daysDifference} days</p>
      <p>2. Time difference (years, months, days): ${years} years, ${months} months, and ${days} days</p>
      <p>3. The closest date to the current date: ${closestDate.toLocaleString(DateTime.DATE_MED)}</p>
      <p>4. Comparison between Date1 and Date2: ${comparisonResult}</p>
      <p>5. Current time in London: ${londonTime}</p>
    `;

    document.getElementById('results').innerHTML = results;

  })();