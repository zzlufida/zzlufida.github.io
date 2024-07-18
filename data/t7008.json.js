window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t7008","name":"MOM_Protocol","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"MOM_Protocol"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-93454","object_id":"column-93454","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-93455","object_id":"column-93455","name":"ProtocolID","name_without_path":"ProtocolID","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-93456","object_id":"column-93456","name":"FriendName","name_without_path":"FriendName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-93457","object_id":"column-93457","name":"PARTInvokingInfo","name_without_path":"PARTInvokingInfo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"512","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-93458","object_id":"column-93458","name":"PADTInvokingInfo","name_without_path":"PADTInvokingInfo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"512","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-93459","object_id":"column-93459","name":"Description","name_without_path":"Description","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_IBEndPoint_Protocol","title":null,"description":null,"is_user_defined":false,"foreign_table":"IB_EndPoint","foreign_table_show_schema":"dbo.IB_EndPoint","foreign_table_verbose":"IB_EndPoint","foreign_table_verbose_show_schema":"dbo.IB_EndPoint","foreign_table_object_id":"t6842","primary_table":"MOM_Protocol","primary_table_show_schema":"dbo.MOM_Protocol","primary_table_verbose":"MOM_Protocol","primary_table_verbose_show_schema":"dbo.MOM_Protocol","primary_table_object_id":"t7008","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"ProtocolID","foreign_column_path":null,"foreign_column":"ProtocolID"}],"custom_fields":{}},{"name":"FK_EndPoint_Protocol","title":null,"description":null,"is_user_defined":false,"foreign_table":"Reg_EndPoint","foreign_table_show_schema":"dbo.Reg_EndPoint","foreign_table_verbose":"Reg_EndPoint","foreign_table_verbose_show_schema":"dbo.Reg_EndPoint","foreign_table_object_id":"t7887","primary_table":"MOM_Protocol","primary_table_show_schema":"dbo.MOM_Protocol","primary_table_verbose":"MOM_Protocol","primary_table_verbose_show_schema":"dbo.MOM_Protocol","primary_table_object_id":"t7008","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"ProtocolID","foreign_column_path":null,"foreign_column":"ProtocolID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_MOM_Protocol","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"ProtocolID","name":"ProtocolID"}],"custom_fields":{}},{"name":"Uq_FriendName","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"FriendName","name":"FriendName"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};