window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11673","name":"NE_Digest_Mobile_View","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view NE_Digest_Mobile_View  \r\nas  \r\n select GL_bDigest.i_id,GL_bDigest.cId,GL_bDigest.cText\r\n from GL_bDigest","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"NE_Digest_Mobile_View"},{"field":"Type","value":"View"}],"columns":[{"id":"column-249008","object_id":"column-249008","name":"i_id","name_without_path":"i_id","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249009","object_id":"column-249009","name":"cId","name_without_path":"cId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249010","object_id":"column-249010","name":"cText","name_without_path":"cText","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};