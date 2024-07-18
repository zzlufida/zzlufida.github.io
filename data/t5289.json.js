window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t5289","name":"exch (币种汇率档案)","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"exch"},{"field":"Type","value":"Table"},{"field":"Title","value":"币种汇率档案"},{"field":"Module","value":[{"_type":"link","name":"总账财务","id":"m112"}]}],"columns":[{"id":"column-61875","object_id":"column-61875","name":"i_id (自动编号)","name_without_path":"i_id (自动编号)","description":null,"is_pk":true,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-61876","object_id":"column-61876","name":"cexch_name (币种名称)","name_without_path":"cexch_name (币种名称)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-61877","object_id":"column-61877","name":"iperiod (会计期间)","name_without_path":"iperiod (会计期间)","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-61878","object_id":"column-61878","name":"itype (汇率类型)","name_without_path":"itype (汇率类型)","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-61879","object_id":"column-61879","name":"cdate (日期)","name_without_path":"cdate (日期)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-61880","object_id":"column-61880","name":"nflat (汇率)","name_without_path":"nflat (汇率)","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-61881","object_id":"column-61881","name":"pubufts (时间戳)","name_without_path":"pubufts (时间戳)","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-61882","object_id":"column-61882","name":"iYear (iYear)","name_without_path":"iYear (iYear)","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"unique_keys":[{"name":"aaaaaexch_PK","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"i_id (自动编号)","name":"i_id (自动编号)"}],"custom_fields":{}}],"triggers":[{"name":"gl_v_exch_InsteadTrigger","description":null,"action":"After Insert ","custom_fields":{}}],"dependencies":null,"imported_at":"2024-07-15 13:47"};