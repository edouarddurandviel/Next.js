'use client';
import { SWRConfig, useSWRConfig } from 'swr';
import StoreProvider from './storeProvider';
import './styles/global.module.scss';
import useSWRMutation from 'swr/mutation';

export const dynamic = 'force-dynamic';

const RootLayout = ({ children }: { children: React.ReactNode }) => {

  const someData = {name: 'Edouard'}

  // get config infos
  const {cache, mutate, ...extraConfig} = useSWRConfig()
  console.log(cache)

  async function updateUser(url: string, { arg }: { arg: string }) {
  await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${arg}`
    }
  })
}

// optimisticData: same as mutate's optimisticData
// revalidate = true: same as mutate's revalidate
// populateCache = false: same as mutate's populateCache, but the default is false
// rollbackOnError = true: same as mutate's rollbackOnError
// throwOnError = true: same as mutate's throwOnError
// onSuccess(data, key, config):　 callback function when a remote mutation has been finished successfully
// onError(err, key, config): callback function when a remote mutation has returned an error
const options = {
  optimisticData: true
}

  const { trigger } = useSWRMutation('/api/user', updateUser, options)

  mutate(
    key => true, // which cache keys are updated key name 'app-cache' storage item if localstorage for example.
    undefined, // update cache data to `undefined`
    { revalidate: false } // do not revalidate
  )

  // key types
  // useSWR('', () => fetcher('/api/user'))
  // useSWR('', url => fetcher(url))
  // useSWR('', fetcher)

  // Map init content can be of any type. 


  return (
    <StoreProvider>
      <SWRConfig value={{
          onError: (error, key) => {
            if (error.status !== 403 && error.status !== 404) {
              // We can send the error to Sentry,
              // or show a notification UI.
              alert(error)
            }
          },
          provider: () => new Map() // cache provider in Map
        }}>
      <html lang='en'>
        <body>{children}</body>
         <button onClick={async () => {
          const newName = someData.name.toUpperCase()
          // send a request to the API to update the data

          await trigger(newName)

          // update the local data immediately and revalidate (refetch)
          // NOTE: key is not required when using useSWR's mutate as it's pre-bound
          mutate({ 
            ...someData, 
            name: newName 
          })

        }}>Uppercase my name!</button>
      </html>
      </SWRConfig>
    </StoreProvider>
  );
};

export default RootLayout;
