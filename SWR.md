SWR 

fetching data
cache revalidation, arguments => chain or combine requests 
mutation / revalidation
error handling

undefined keys
=> fallback data 
=> previous data 

state management
new data when state 110% updated

swr component is three shaking ok

// init
<SWRConfig value={options}>
  <Component/>
</SWRConfig>

// causes rerender for each values
// fetcher can be fetch or any framework such as axios …
const fetcher = url => axios.get(url).then(res => res.data)
    
const { data, error, isLoading } = useSWR(`/api/user/${id}`, fetcher, 
	
)




