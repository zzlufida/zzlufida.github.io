window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10141","name":"caq_serviceprice","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view caq_serviceprice as \r\nselect max(iperiod) as iperiod,max(cprocedureid) as cprocedureid,\r\n(case sum(iqua) when 0 then 0 else sum(itotalamo)/sum(iqua) end) as price \r\nfrom ca_samoct group by cprocedureid","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"caq_serviceprice"},{"field":"Type","value":"View"}],"columns":[{"id":"column-174495","object_id":"column-174495","name":"iperiod","name_without_path":"iperiod","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174496","object_id":"column-174496","name":"cprocedureid","name_without_path":"cprocedureid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174497","object_id":"column-174497","name":"price","name_without_path":"price","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};