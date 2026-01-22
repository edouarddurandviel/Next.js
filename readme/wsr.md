### Wrapper called fetcher

function fetcher(...args){
const result = fetch(...args).then((res) => res.json())

}

### Reusable with dedicated Hooks

function useUserHook (id){
const {data, error, isLoading, isValidating, mutate} = useSWR(url/${id} || null, fetcher, options);

    return {
        user: data,
        isLoading,
        isError: error,
        isValidating,
        mutate
    }

}

### Avantages - component isolation and context

- hook is bound (associated) to component where data is needed
- Only on request for every components using the same cached hook(key)
- Requests are deduped, cached, shared, refetched (focus, network reconnect)
- url can be null for conditional fetching

### mutate

- mutate the cached data

### Multiple args

- url is still the same but token changes
- use an array or an object to keep all in one args
- useSWR dependent queries cascading errors

const { data: user } = useSWR(
[url, token],
([url, token]) => fetchWithToken(url, token)
)
or
const { data: user } = useSWR(
{ url: url, args: user},
fetchers
)

## Axios vs fetch API

- need to parse payload to json
- need to create dedicated errors
  -- many valuable options with axios
