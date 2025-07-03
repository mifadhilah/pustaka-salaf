-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL,
    "isbn" TEXT,
    "title" TEXT NOT NULL,
    "page_count" INTEGER,
    "description" TEXT,
    "author_id" TEXT NOT NULL,
    "publisher_id" TEXT NOT NULL,
    "category_id" TEXT,
    "source_book_id" TEXT,
    "cover_image_url" TEXT,
    "language" TEXT,
    "dimension_height" DOUBLE PRECISION,
    "dimension_width" DOUBLE PRECISION,
    "dimension_depth" DOUBLE PRECISION,
    "weight" DOUBLE PRECISION,
    "edition" TEXT,
    "ebook_link" TEXT,
    "buy_link" TEXT,
    "is_sold_out" BOOLEAN NOT NULL DEFAULT false,
    "is_visible" BOOLEAN NOT NULL DEFAULT false,
    "published_at" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
