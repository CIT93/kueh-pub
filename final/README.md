Name of App: 

    Sleep > Workout

Purpose of app:

    The purpose of this app is to assist the user in determing if they had enough sleep on their work-day before working out. By calculating the hours of sleep/naps and if it's a work-day the user will be advised to get some rest or to workout. More then 6hrs of total sleep on a work-day would warrant a workout day. Less than 6hrs of total sleep on a work-day would mean its a rest day. Non-working days are an automatic workout day Unless the user has gotten less then 4hrs of sleep.

Global Variables:

    totalHrsSleep (Number): the total hours of sleep the user has gotten (sleep from night before + naps). ranging from 0-24hrs.
    sleep (Number): the hours of sleep the user has gotten the night before. ranging from 0-24hrs 
    naps (Number): the minutes of nap the user has gotten during the day. Ranging from 1-60 minutes
    today (String): the current day of the week. M-F are work-day, Sat-Sun are non-working days.
    workDay (Boolean): Return true if it's Mon-Fri, if not then returns false.
    nonWorkDay (Boolean): Return true if it's Sat or Sun.

Decision Making Process:

    If today is Mon-Fri then it is a workday, if today is Sat-Sun it is a non-working day.

    If today is a non-working day and the user has had more than 4hrs of total sleep then the app advises the user to workout and get more rest.

    If today is a non-working day and the user has not had more than 4hrs of total sleep the app advises the user to rest today.

    If today is a work day and the users total hours of sleep is greater or equal to 6hrs of sleep, then the app advises user to workout today.

    If today is a work day and the users total hours of sleep is less than 6hrs of sleep, then the app advises user to rest today.

Output:

    Today is a Workout day or a Rest day

