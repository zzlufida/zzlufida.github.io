window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10110","name":"Caq_InitLeftAdjust","subtype":"VIEW","is_user_defined":false,"description":null,"script":"Create View Caq_InitLeftAdjust \r\nas \r\n\tSelect cppid,cbatch,cAmoType,cAmoId,\r\n\t\tcase iType when 2 then -iQuo else iQuo end iQuo,\r\n\t\tcase iType when 2 then -iOnpTotalAmo else iOnptotalAmo end iOnptotalAmo,\r\n\t\t0 bFixed\r\n\tfrom ca_MoveAmoct where iperiod = 0 and bQcAdjust = 1 and iType in (1,2)","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Caq_InitLeftAdjust"},{"field":"Type","value":"View"}],"columns":[{"id":"column-174140","object_id":"column-174140","name":"cppid","name_without_path":"cppid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174141","object_id":"column-174141","name":"cbatch","name_without_path":"cbatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174142","object_id":"column-174142","name":"cAmoType","name_without_path":"cAmoType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174143","object_id":"column-174143","name":"cAmoId","name_without_path":"cAmoId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174144","object_id":"column-174144","name":"iQuo","name_without_path":"iQuo","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174145","object_id":"column-174145","name":"iOnptotalAmo","name_without_path":"iOnptotalAmo","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174146","object_id":"column-174146","name":"bFixed","name_without_path":"bFixed","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};