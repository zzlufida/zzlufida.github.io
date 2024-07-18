window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12367","name":"SQ_BOMMANHOURT","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW SQ_BOMMANHOURT AS \r\n  SELECT \tSQ_BOMMANHOUR.AUTOID, \r\n\t\tSQ_BOMMANHOUR.ID, \r\n\t\tSQ_BOMMANHOUR.FLABORHR, \r\n\t\tSQ_BOMMANHOUR.WCID ,\r\n\t\tSFC_WORKCENTER.WCCODE,\r\n\t\tSFC_WORKCENTER.DESCRIPTION\r\n  FROM SQ_BOMMANHOUR LEFT JOIN SFC_WORKCENTER ON SFC_WORKCENTER.WCID=SQ_BOMMANHOUR.WCID","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"SQ_BOMMANHOURT"},{"field":"Type","value":"View"}],"columns":[{"id":"column-301060","object_id":"column-301060","name":"AUTOID","name_without_path":"AUTOID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301061","object_id":"column-301061","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301062","object_id":"column-301062","name":"FLABORHR","name_without_path":"FLABORHR","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301063","object_id":"column-301063","name":"WCID","name_without_path":"WCID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301064","object_id":"column-301064","name":"WCCODE","name_without_path":"WCCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301065","object_id":"column-301065","name":"DESCRIPTION","name_without_path":"DESCRIPTION","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};