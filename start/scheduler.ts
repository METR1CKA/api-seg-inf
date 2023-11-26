import Scheduler from '@ioc:Adonis/Addons/Scheduler'
import DocsGenerate from 'Commands/DocsGenerate'

Scheduler
  .command(DocsGenerate)
  .cron('* * * * * *')
