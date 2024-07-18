window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t7006","name":"mom_partproline","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"mom_partproline"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-93444","object_id":"column-93444","name":"PartProLineId","name_without_path":"PartProLineId","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-93433","object_id":"column-93433","name":"PartId","name_without_path":"PartId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-93434","object_id":"column-93434","name":"AuxUnitCode","name_without_path":"AuxUnitCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-93435","object_id":"column-93435","name":"CreateDate","name_without_path":"CreateDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-93436","object_id":"column-93436","name":"CreateUser","name_without_path":"CreateUser","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-93437","object_id":"column-93437","name":"ModifyDate","name_without_path":"ModifyDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-93438","object_id":"column-93438","name":"ModifyUser","name_without_path":"ModifyUser","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-93439","object_id":"column-93439","name":"UpdCount","name_without_path":"UpdCount","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-93440","object_id":"column-93440","name":"Ufts","name_without_path":"Ufts","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-93441","object_id":"column-93441","name":"VTid","name_without_path":"VTid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-93442","object_id":"column-93442","name":"CreateTime","name_without_path":"CreateTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-93443","object_id":"column-93443","name":"ModifyTime","name_without_path":"ModifyTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_mom_partprolinedetail","title":null,"description":null,"is_user_defined":false,"foreign_table":"mom_partprolinedetail","foreign_table_show_schema":"dbo.mom_partprolinedetail","foreign_table_verbose":"mom_partprolinedetail","foreign_table_verbose_show_schema":"dbo.mom_partprolinedetail","foreign_table_object_id":"t7007","primary_table":"mom_partproline","primary_table_show_schema":"dbo.mom_partproline","primary_table_verbose":"mom_partproline","primary_table_verbose_show_schema":"dbo.mom_partproline","primary_table_object_id":"t7006","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"PartProLineId","foreign_column_path":null,"foreign_column":"PartProLineId"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_mom_partproline","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"PartProLineId","name":"PartProLineId"}],"custom_fields":{}},{"name":"i_mom_partproline","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"PartId","name":"PartId"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};