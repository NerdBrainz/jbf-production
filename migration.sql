CREATE TABLE `pages` (
  `id` integer PRIMARY KEY NOT NULL,
  `title` text NOT NULL,
  `slug` text NOT NULL,
  `content` text,
  `updated_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  `created_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
);

CREATE UNIQUE INDEX `pages_slug_idx` ON `pages` (`slug`);
CREATE INDEX `pages_updated_at_idx` ON `pages` (`updated_at`);
CREATE INDEX `pages_created_at_idx` ON `pages` (`created_at`);

CREATE TABLE `posts` (
  `id` integer PRIMARY KEY NOT NULL,
  `title` text NOT NULL,
  `category` text DEFAULT 'news' NOT NULL,
  `author_id` integer NOT NULL,
  `published_at` text,
  `meta_title` text,
  `meta_description` text,
  `meta_image_id` integer,
  `content` text,
  `updated_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  `created_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  FOREIGN KEY (`author_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE set null,
  FOREIGN KEY (`meta_image_id`) REFERENCES `media`(`id`) ON UPDATE no action ON DELETE set null
);

CREATE INDEX `posts_author_idx` ON `posts` (`author_id`);
CREATE INDEX `posts_meta_meta_image_idx` ON `posts` (`meta_image_id`);
CREATE INDEX `posts_updated_at_idx` ON `posts` (`updated_at`);
CREATE INDEX `posts_created_at_idx` ON `posts` (`created_at`);

CREATE TABLE `events` (
  `id` integer PRIMARY KEY NOT NULL,
  `title` text NOT NULL,
  `start_date_time` text NOT NULL,
  `end_date_time` text,
  `location` text,
  `link` text,
  `meta_title` text,
  `meta_description` text,
  `meta_image_id` integer,
  `description` text,
  `updated_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  `created_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  FOREIGN KEY (`meta_image_id`) REFERENCES `media`(`id`) ON UPDATE no action ON DELETE set null
);

CREATE INDEX `events_meta_meta_image_idx` ON `events` (`meta_image_id`);
CREATE INDEX `events_updated_at_idx` ON `events` (`updated_at`);
CREATE INDEX `events_created_at_idx` ON `events` (`created_at`);

CREATE TABLE `heroes` (
  `id` integer PRIMARY KEY NOT NULL,
  `name` text NOT NULL,
  `type` text,
  `photo_id` integer,
  `story` text,
  `updated_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  `created_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  FOREIGN KEY (`photo_id`) REFERENCES `media`(`id`) ON UPDATE no action ON DELETE set null
);

CREATE INDEX `heroes_photo_idx` ON `heroes` (`photo_id`);
CREATE INDEX `heroes_updated_at_idx` ON `heroes` (`updated_at`);
CREATE INDEX `heroes_created_at_idx` ON `heroes` (`created_at`);

CREATE TABLE `registry_clicks` (
  `id` integer PRIMARY KEY NOT NULL,
  `country` text NOT NULL,
  `registry_name` text,
  `updated_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  `created_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
);

CREATE INDEX `registry_clicks_updated_at_idx` ON `registry_clicks` (`updated_at`);
CREATE INDEX `registry_clicks_created_at_idx` ON `registry_clicks` (`created_at`);

CREATE TABLE `site_settings` (
  `id` integer PRIMARY KEY NOT NULL,
  `announcement_banner_is_active` integer,
  `announcement_banner_message` text,
  `announcement_banner_link` text,
  `fundraising_givebutter_code` text,
  `updated_at` text,
  `created_at` text
);

ALTER TABLE `payload_locked_documents_rels` ADD `pages_id` integer REFERENCES pages(id);
ALTER TABLE `payload_locked_documents_rels` ADD `posts_id` integer REFERENCES posts(id);
ALTER TABLE `payload_locked_documents_rels` ADD `events_id` integer REFERENCES events(id);
ALTER TABLE `payload_locked_documents_rels` ADD `heroes_id` integer REFERENCES heroes(id);
ALTER TABLE `payload_locked_documents_rels` ADD `registry_clicks_id` integer REFERENCES registry_clicks(id);

CREATE INDEX `payload_locked_documents_rels_pages_id_idx` ON `payload_locked_documents_rels` (`pages_id`);
CREATE INDEX `payload_locked_documents_rels_posts_id_idx` ON `payload_locked_documents_rels` (`posts_id`);
CREATE INDEX `payload_locked_documents_rels_events_id_idx` ON `payload_locked_documents_rels` (`events_id`);
CREATE INDEX `payload_locked_documents_rels_heroes_id_idx` ON `payload_locked_documents_rels` (`heroes_id`);
CREATE INDEX `payload_locked_documents_rels_registry_clicks_id_idx` ON `payload_locked_documents_rels` (`registry_clicks_id`);