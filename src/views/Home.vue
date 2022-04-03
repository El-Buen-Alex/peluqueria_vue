<template>
  <div>
    <!-- <va-sidebar :theme="sidebarTheme">
        <va-sidebar-group :items="getStartedItems" :title="'Getting started'" :defaultOpenLevel="1" :show-toggle="showToggle"/>
        <va-sidebar-group :items="coreItems" :title="'Components'" :defaultOpenLevel="0" :show-toggle="showToggle"/>
    </va-sidebar> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      sidebarTheme: 'default',
      getStartedItems: [
        {
          name: 'Introduction',
          route: '/documentation/introduction',
          children: [
            { name: 'Installation', element: '#installation' },
            { name: 'Quickstart', element: '#quickstart' },
            {
              name: 'GitHub',
              external: 'https://github.com/nvms/vue-atlas',
              icon: 'github-alt',
              iconStyle: 'brands'
            }
          ]
        }
      ],
      coreItems: [
        { name: 'AnimQueue', route: '/documentation/animqueue' },
        { name: 'App', route: '/documentation/App' },
        { name: 'Affix', route: '/documentation/affix' },
        { name: 'Alert', route: '/documentation/alert' },
        { name: 'Aside', route: '/documentation/aside' },
        {
            name: 'Badge',
            route: '/documentation/badge',
            icon: 'pencil-alt',
            iconSize: '12px',
            iconColor: 'red',
            iconStyle: 'solid'
        },
        { name: 'Button', route: '/documentation/button' },
        { name: 'Card', route: '/documentation/card' },
        { name: 'Checkbox', route: '/documentation/checkbox' },
        {
          name: 'Colorpicker',
          route: '/documentation/colorpicker',
          lozenge: {
            type: 'purple',
            text: 'NEW',
            bold: true
          }
        },
        { name: 'Datepicker', route: '/documentation/datepicker' },
        { name: 'Dropdown', route: '/documentation/dropdown' },
        {
          name: 'Form',
          route: '/documentation/form',
          children: [
            { name: 'Input', route: '/documentation/form/input' },
            { name: 'Textarea', route: '/documentation/form/textarea' },
            { name: 'Validation', route: '/documentation/form/validation' }
          ]
        },
        { name: 'Grid', route: '/documentation/grid' },
        { name: 'Icon', route: '/documentation/icon' },
        { name: 'Loading', route: '/documentation/loading' },
        { name: 'Lozenge', route: '/documentation/lozenge' },
        { name: 'Minibar', route: '/documentation/minibar' },
        { name: 'Modal', route: '/documentation/modal' },
        { name: 'Notification', route: '/documentation/notification' },
        { name: 'Page header', route: '/documentation/pageheader' },
        { name: 'Pagination', route: '/documentation/pagination' },
        { name: 'Placeholder', route: '/documentation/placeholder' },
        { name: 'Progress tracker', route: '/documentation/progresstracker' },
        { name: 'Radio', route: '/documentation/radio' },
        { name: 'Range', route: '/documentation/range' },
        { name: 'Select', route: '/documentation/select' },
        { name: 'Sidebar', route: '/documentation/sidebar' },
        { name: 'Table', route: '/documentation/table' },
        { name: 'Tabs', route: '/documentation/tabs' },
        { name: 'Timepicker', route: '/documentation/timepicker' },
        { name: 'Toast', route: '/documentation/toast' },
        { name: 'Toggle', route: '/documentation/toggle' },
        { name: 'Tooltip', route: '/documentation/tooltip' },
        { name: 'Topbar', route: '/documentation/topbar' },
        { name: 'Typeahead', route: '/documentation/typeahead' }
      ]
    }
  },
  methods: {
    demoMethod () {
      this.VaModal.confirm({
        title: 'Hello!',
        message: `This modal exists to show how methods
        can be applied to Minibar items.`,
        type: 'info'
      })
    }
  }
}
</script>