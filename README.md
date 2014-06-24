# Bony.js

Simplest view and event emitter framework(2.1k)

Utilities what I want.

## Goal

Become glue inner libraries.

## Requirements

- jQuery

## API

Namespace is `Bn`

### View

```
class MyView extends Bn.View
	# render automatically
	template: '''
		<div class='my-view'>
		</div>
	'''
  constructor: ->
		super
		@$('.my-view').text 'this is my view.'
		@attachTo 'body'
```

- View#$el : jQueryElement
- View#$(selector)
- View#show()
- View#hide()
- View#detach()
- View#attachTo(selectorOrView)

And view has all event emitter api.

### EventEmitter

```
ee = new Bn.EventEmitter

fn = -> console.log 'hello1'

ee.on 'hello1', fn
ee.on 'hello2', -> console.log 'hello2'

ee.trigger 'hello' #=> hello1, hello2
ee.off 'hello', fn # remove fn 
ee.off 'hello' # remove all 'hello' events
```

- on(eventName, callback)
- off(eventName, callback?)
- trigger(eventName, args...)
