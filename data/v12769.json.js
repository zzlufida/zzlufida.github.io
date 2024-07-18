window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12769","name":"v_CO_WCManuRate","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view v_CO_WCManuRate\r\nas\r\nselect\r\n  Wcid,\r\n  fManuStdRate=sum(isnull(fManuStdRate,0))\r\nfrom pl_CO_WCManuRate\r\ngroup by Wcid","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_CO_WCManuRate"},{"field":"Type","value":"View"}],"columns":[{"id":"column-319014","object_id":"column-319014","name":"Wcid","name_without_path":"Wcid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319015","object_id":"column-319015","name":"fManuStdRate","name_without_path":"fManuStdRate","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};