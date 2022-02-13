

export default {
    name: 'daybook',
    component: () => import(/* webpackChuckName: "daybook" */'@/modules/daybook/layout/DayBookLayout.vue'),
    children: [
     {
         path: '',
         name: 'no-entry',
         component: () => import(/* webpackChuckName: "daybook-no-entry" */'@/modules/daybook/views/NoEntrySelected.vue'),
     },
     {
        path: ':id',
        name: 'entry',
        component: () => import(/* webpackChuckName: "daybook-entry" */'@/modules/daybook/views/EntryView.vue'),
     }  
    ]
}