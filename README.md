# data-police-uk-qraphql
> GraphQL wrapper around the Police API.

This project is a GraphQL server for the [data.police.uk API](https://data.police.uk/docs/).

## Usage example

This GraphQL service was written so that clients can request exactly the information they want i.e. Elminates the need to send redundant data "over the wire".

## Development setup

To set-up a watched build run:

```sh
npm run build
```

And to run the GraphQL server run:

```sh
npm run build
```

Note that the code has been formatted using Prettiers rules. To get the code prettified (sic) run:

```sh
npm run prettier
```

The GraphQL playground can then be accessed at:

http://localhost:4000/

## Release History

* 0.0.1
    * Work in progress - I have implemented GraphQL queries for the Force and Street Level crime API end points. More work needs to be done to implement the other endpoints. It also needs some test coverage.

## Meta

Distributed under the MIT license.

## Contributing

Feel free to help implement the other police API endpoints.

1. Fork it (<https://github.com/8enSmith/data-police-uk-qraphql/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
