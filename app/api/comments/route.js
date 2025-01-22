import { connectToDB } from '@/lib/db';
import Comment from '@/models/Comment';

export async function POST(request) {
  try {
    await connectToDB();

    const { name, email, message, slug } = await request.json();
    if (!name || !email || !message || !slug) {
      return new Response(
        JSON.stringify({ error: 'Je nutné vyplnit všechna pole.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const newComment = await Comment.create({ name, email, message, slug });

    return new Response(
      JSON.stringify({ message: 'Komentář byl úspěšně přidán.', comment: newComment }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: 'Chyba při ukládání komentáře.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function GET(request) {
  try {
    await connectToDB();

    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (!slug) {
      return new Response(
        JSON.stringify({ error: 'Je vyžadován parametr slug.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const postComments = await Comment.find({ slug }).sort({ date: -1 });

    return new Response(
      JSON.stringify({ comments: postComments }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: 'Nepodařilo se zobrazit komentáře.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function DELETE(request) {
  try {
    await connectToDB();

    const adminHeader = request.headers.get('x-admin-key');
    if (!adminHeader || adminHeader !== process.env.ADMIN_DELETE_KEY) {
      return new Response(JSON.stringify({ error: 'Neautorizovaný uživatel.' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { searchParams } = new URL(request.url);
    const commentId = searchParams.get('id');

    if (!commentId) {
      return new Response(JSON.stringify({ error: 'Chybějící ID komentáře.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const deletedComment = await Comment.findByIdAndDelete(commentId);

    if (!deletedComment) {
      return new Response(JSON.stringify({ error: 'Komentář nenalezen.' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(
      JSON.stringify({ message: 'Komentář byl úspěšně smazán.' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Chyba serveru.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}