window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13073","name":"v_ex_process_phase","subtype":"VIEW","is_user_defined":false,"description":null,"script":"/*==============================================================*/\r\n/* view: v_ex_process_phase                                     */\r\n/*==============================================================*/\r\ncreate view v_ex_process_phase as \r\nselect   convert(nvarchar(50),ex_process_phase.guid ) as guid , cphasecode , cphasename , cphaseremark , \r\nvouchguid ,v_ex_vouchs.code as vouchcode,v_ex_vouchs.name as vouchname ,v_ex_vouchs.cvouchtype , istartedid\t, ex_boolean.cbool as cstarted ,\r\nimenuid\t, cvoucherrequst ,crelatevouchs ,ex_process_phase.bsystem \r\nfrom ex_process_phase \r\nleft join v_ex_vouchs on v_ex_vouchs.guid = ex_process_phase.vouchguid \r\nleft join ex_boolean on ex_boolean.iboolid = istartedid and ex_boolean.langid = @@langid \r\nwhere ex_process_phase.langid = dbo.UDF_GetLocaleID()\r\nunion\r\nselect   convert(nvarchar(50),ex_process_phase.guid ) as guid , cphasecode , cphasename , cphaseremark , \r\nvouchguid ,v_ex_vouchs.code as vouchcode,v_ex_vouchs.name as vouchname ,v_ex_vouchs.cvouchtype , istartedid\t, ex_boolean.cbool as cstarted ,\r\nimenuid\t, cvoucherrequst ,crelatevouchs ,ex_process_phase.bsystem \r\nfrom ex_process_phase \r\nleft join v_ex_vouchs on v_ex_vouchs.guid = ex_process_phase.vouchguid \r\nleft join ex_boolean on ex_boolean.iboolid = istartedid and ex_boolean.langid = @@langid \r\nwhere isnull(ex_process_phase.langid,'') = 'nl'","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_ex_process_phase"},{"field":"Type","value":"View"}],"columns":[{"id":"column-347505","object_id":"column-347505","name":"guid","name_without_path":"guid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347506","object_id":"column-347506","name":"cphasecode","name_without_path":"cphasecode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347507","object_id":"column-347507","name":"cphasename","name_without_path":"cphasename","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347508","object_id":"column-347508","name":"cphaseremark","name_without_path":"cphaseremark","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347509","object_id":"column-347509","name":"vouchguid","name_without_path":"vouchguid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347510","object_id":"column-347510","name":"vouchcode","name_without_path":"vouchcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347511","object_id":"column-347511","name":"vouchname","name_without_path":"vouchname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347512","object_id":"column-347512","name":"cvouchtype","name_without_path":"cvouchtype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347513","object_id":"column-347513","name":"istartedid","name_without_path":"istartedid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347514","object_id":"column-347514","name":"cstarted","name_without_path":"cstarted","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347515","object_id":"column-347515","name":"imenuid","name_without_path":"imenuid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347516","object_id":"column-347516","name":"cvoucherrequst","name_without_path":"cvoucherrequst","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347517","object_id":"column-347517","name":"crelatevouchs","name_without_path":"crelatevouchs","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-347518","object_id":"column-347518","name":"bsystem","name_without_path":"bsystem","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};