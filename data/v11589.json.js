window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11589","name":"kc_v_refpickadjust","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW kc_v_refpickadjust\r\nAS\r\n\r\nselect \r\n\tdistinct bs.isdid,bs.idlsid,br.autoid as idirectiveid,bs.csvouchtype,adjs.id,adjs.autoid  \r\nfrom KC_SaleOutOrdersSource bs \r\n\tleft outer join KC_SaleOutOrderResult br on bs.isdid = br.isdid \r\n\tleft outer join adjustpvouchs adjs on br.autoid = adjs.idirectiveid","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"kc_v_refpickadjust"},{"field":"Type","value":"View"}],"columns":[{"id":"column-240345","object_id":"column-240345","name":"isdid","name_without_path":"isdid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-240346","object_id":"column-240346","name":"idlsid","name_without_path":"idlsid","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-240347","object_id":"column-240347","name":"idirectiveid","name_without_path":"idirectiveid","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-240348","object_id":"column-240348","name":"csvouchtype","name_without_path":"csvouchtype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-240349","object_id":"column-240349","name":"id","name_without_path":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-240350","object_id":"column-240350","name":"autoid","name_without_path":"autoid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};