let comments = [];

export async function POST(request) {
  try {
    const { name, email, message, slug } = await request.json();

    if (!name || !email || !message || !slug) {
      return new Response(
        JSON.stringify({ error: 'Jsou vyžadována všechna pole.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const newComment = {
      id: Date.now(),
      name,
      email,
      message,
      slug,
      date: new Date().toISOString(),
    };

    comments.push(newComment);

    return new Response(
      JSON.stringify({ message: 'Komentář byl úspěšně přidán.', comment: newComment }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Neplatný požadavek.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (!slug) {
      return new Response(
        JSON.stringify({ error: 'Je vyžadován parametr za URL.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const postComments = comments.filter((comment) => comment.slug === slug);

    return new Response(
      JSON.stringify({ comments: postComments }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Nepovedlo se zobrazit komentáře.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}