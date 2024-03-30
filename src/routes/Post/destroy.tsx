import { redirect } from "react-router-dom"
import {destroyPost} from '../../data/post'

export async function action( { params }: any ) {
    await destroyPost(params.postId);
    return redirect('/')

}

export default function destroy() {
  return (
    <div>
      
    </div>
  )
}
