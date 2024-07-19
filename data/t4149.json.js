window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4149","name":"bom_opcomponent (BOM子件资料)","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"bom_opcomponent"},{"field":"Type","value":"Table"},{"field":"Title","value":"BOM子件资料"},{"field":"Module","value":[{"_type":"link","name":"物料清单BOM","id":"m114"}]}],"columns":[{"id":"column-41476","object_id":"column-41476","name":"OpComponentId (子件ID 主键ID 自增量)","name_without_path":"OpComponentId (子件ID 主键ID 自增量)","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41477","object_id":"column-41477","name":"BomId (母件档ID)","name_without_path":"BomId (母件档ID)","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t4128","name":"bom_bom (BOM资料)","name_show_schema":"dbo.bom_bom (BOM资料)"}]},{"id":"column-41478","object_id":"column-41478","name":"SortSeq (序号)","name_without_path":"SortSeq (序号)","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41479","object_id":"column-41479","name":"OpSeq (工序代号)","name_without_path":"OpSeq (工序代号)","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41480","object_id":"column-41480","name":"ComponentId (子件物料Id)","name_without_path":"ComponentId (子件物料Id)","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t3947","name":"bas_part (物料表)","name_show_schema":"dbo.bas_part (物料表)"}]},{"id":"column-41481","object_id":"column-41481","name":"EffBegDate (子件生效日)","name_without_path":"EffBegDate (子件生效日)","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41482","object_id":"column-41482","name":"EffEndDate (子件失效日)","name_without_path":"EffEndDate (子件失效日)","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41483","object_id":"column-41483","name":"FVFlag (固定/变动批量(0/1))","name_without_path":"FVFlag (固定/变动批量(0/1))","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"1","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41484","object_id":"column-41484","name":"BaseQtyN (基本用量-分子)","name_without_path":"BaseQtyN (基本用量-分子)","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":"\r\n\r\ncreate default D_Udt_QTY\r\n    as 0\r\n\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41485","object_id":"column-41485","name":"BaseQtyD (基本用量-分母)","name_without_path":"BaseQtyD (基本用量-分母)","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":"\r\n\r\ncreate default D_Udt_QTY\r\n    as 0\r\n\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41486","object_id":"column-41486","name":"CompScrap (子件损耗率)","name_without_path":"CompScrap (子件损耗率)","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_Rate: decimal","data_length":"6, 3","is_nullable":true,"computed_formula":null,"default_value":"\r\n\r\ncreate default D_Udt_Rate\r\n    as 0\r\n\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41487","object_id":"column-41487","name":"ByproductFlag (是否联副产品)","name_without_path":"ByproductFlag (是否联副产品)","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41488","object_id":"column-41488","name":"OptionsId (选项资料Id)","name_without_path":"OptionsId (选项资料Id)","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t4153","name":"bom_opcomponentopt (BOM子件选项资料)","name_show_schema":"dbo.bom_opcomponentopt (BOM子件选项资料)"}]},{"id":"column-41489","object_id":"column-41489","name":"Ufts (时间梭)","name_without_path":"Ufts (时间梭)","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41490","object_id":"column-41490","name":"AuxUnitCode (辅助计量单位)","name_without_path":"AuxUnitCode (辅助计量单位)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41491","object_id":"column-41491","name":"ChangeRate (换算率)","name_without_path":"ChangeRate (换算率)","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_ChangeRate: decimal","data_length":"22, 6","is_nullable":true,"computed_formula":null,"default_value":"\r\n\r\n\r\ncreate default D_Udt_ChangeRate\r\n    as 0\r\n\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41492","object_id":"column-41492","name":"AuxBaseQtyN (辅助基本用量)","name_without_path":"AuxBaseQtyN (辅助基本用量)","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":"\r\n\r\ncreate default D_Udt_QTY\r\n    as 0\r\n\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41493","object_id":"column-41493","name":"ProductType (产出类型)","name_without_path":"ProductType (产出类型)","description":"(1:空/2:联产品/3:副产品)","is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"1","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41494","object_id":"column-41494","name":"Define22 (表体自定义项1)","name_without_path":"Define22 (表体自定义项1)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41495","object_id":"column-41495","name":"Define23 (表体自定义项2)","name_without_path":"Define23 (表体自定义项2)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41496","object_id":"column-41496","name":"Define24 (表体自定义项3)","name_without_path":"Define24 (表体自定义项3)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41497","object_id":"column-41497","name":"Define25 (表体自定义项4)","name_without_path":"Define25 (表体自定义项4)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41498","object_id":"column-41498","name":"Define26 (表体自定义项5)","name_without_path":"Define26 (表体自定义项5)","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41499","object_id":"column-41499","name":"Define27 (表体自定义项6)","name_without_path":"Define27 (表体自定义项6)","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41500","object_id":"column-41500","name":"Define28 (表体自定义项7)","name_without_path":"Define28 (表体自定义项7)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41501","object_id":"column-41501","name":"Define29 (表体自定义项8)","name_without_path":"Define29 (表体自定义项8)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41502","object_id":"column-41502","name":"Define30 (表体自定义项9)","name_without_path":"Define30 (表体自定义项9)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41503","object_id":"column-41503","name":"Define31 (表体自定义项10)","name_without_path":"Define31 (表体自定义项10)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41504","object_id":"column-41504","name":"Define32 (表体自定义项11)","name_without_path":"Define32 (表体自定义项11)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41505","object_id":"column-41505","name":"Define33 (表体自定义项12)","name_without_path":"Define33 (表体自定义项12)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41506","object_id":"column-41506","name":"Define34 (表体自定义项13)","name_without_path":"Define34 (表体自定义项13)","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41507","object_id":"column-41507","name":"Define35 (表体自定义项14)","name_without_path":"Define35 (表体自定义项14)","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41508","object_id":"column-41508","name":"Define36 (表体自定义项15)","name_without_path":"Define36 (表体自定义项15)","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41509","object_id":"column-41509","name":"Define37 (表体自定义项16)","name_without_path":"Define37 (表体自定义项16)","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41510","object_id":"column-41510","name":"Remark (备注)","name_without_path":"Remark (备注)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41511","object_id":"column-41511","name":"RecursiveFlag (是否循环)","name_without_path":"RecursiveFlag (是否循环)","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41512","object_id":"column-41512","name":"Free1 (自由项1)","name_without_path":"Free1 (自由项1)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41513","object_id":"column-41513","name":"Free2 (自由项2)","name_without_path":"Free2 (自由项2)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41514","object_id":"column-41514","name":"Free3 (自由项3)","name_without_path":"Free3 (自由项3)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41515","object_id":"column-41515","name":"Free4 (自由项4)","name_without_path":"Free4 (自由项4)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41516","object_id":"column-41516","name":"Free5 (自由项5)","name_without_path":"Free5 (自由项5)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41517","object_id":"column-41517","name":"Free6 (自由项6)","name_without_path":"Free6 (自由项6)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41518","object_id":"column-41518","name":"Free7 (自由项7)","name_without_path":"Free7 (自由项7)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41519","object_id":"column-41519","name":"Free8 (自由项8)","name_without_path":"Free8 (自由项8)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41520","object_id":"column-41520","name":"Free9 (自由项9)","name_without_path":"Free9 (自由项9)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41521","object_id":"column-41521","name":"Free10 (自由项10)","name_without_path":"Free10 (自由项10)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41522","object_id":"column-41522","name":"bProcessProduct (店内加工产品)","name_without_path":"bProcessProduct (店内加工产品)","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41523","object_id":"column-41523","name":"bProcessMaterial (店内加工材料)","name_without_path":"bProcessMaterial (店内加工材料)","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"fk_bas_part_bom_opcomponent","title":"","description":"","is_user_defined":true,"foreign_table":"bom_opcomponent","foreign_table_show_schema":"dbo.bom_opcomponent","foreign_table_verbose":"bom_opcomponent (BOM子件资料)","foreign_table_verbose_show_schema":"dbo.bom_opcomponent (BOM子件资料)","foreign_table_object_id":"t4149","primary_table":"bas_part","primary_table_show_schema":"dbo.bas_part","primary_table_verbose":"bas_part (物料表)","primary_table_verbose_show_schema":"dbo.bas_part (物料表)","primary_table_object_id":"t3947","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"PartId","foreign_column_path":null,"foreign_column":"ComponentId"}],"custom_fields":{}},{"name":"fk_bom_bom_bom_opcomponent","title":"","description":"","is_user_defined":true,"foreign_table":"bom_opcomponent","foreign_table_show_schema":"dbo.bom_opcomponent","foreign_table_verbose":"bom_opcomponent (BOM子件资料)","foreign_table_verbose_show_schema":"dbo.bom_opcomponent (BOM子件资料)","foreign_table_object_id":"t4149","primary_table":"bom_bom","primary_table_show_schema":"dbo.bom_bom","primary_table_verbose":"bom_bom (BOM资料)","primary_table_verbose_show_schema":"dbo.bom_bom (BOM资料)","primary_table_object_id":"t4128","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"BomId","foreign_column_path":null,"foreign_column":"BomId"}],"custom_fields":{}},{"name":"fk_bom_opcomponentopt_bom_opcomponent","title":"","description":"","is_user_defined":true,"foreign_table":"bom_opcomponent","foreign_table_show_schema":"dbo.bom_opcomponent","foreign_table_verbose":"bom_opcomponent (BOM子件资料)","foreign_table_verbose_show_schema":"dbo.bom_opcomponent (BOM子件资料)","foreign_table_object_id":"t4149","primary_table":"bom_opcomponentopt","primary_table_show_schema":"dbo.bom_opcomponentopt","primary_table_verbose":"bom_opcomponentopt (BOM子件选项资料)","primary_table_verbose_show_schema":"dbo.bom_opcomponentopt (BOM子件选项资料)","primary_table_object_id":"t4153","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"OptionsId","foreign_column_path":null,"foreign_column":"OptionsId"}],"custom_fields":{}},{"name":"fk_bom_opcomponent_bom_opcomponentfea","title":"","description":"","is_user_defined":true,"foreign_table":"bom_opcomponentfea","foreign_table_show_schema":"dbo.bom_opcomponentfea","foreign_table_verbose":"bom_opcomponentfea (BOM子件特征条件)","foreign_table_verbose_show_schema":"dbo.bom_opcomponentfea (BOM子件特征条件)","foreign_table_object_id":"t4150","primary_table":"bom_opcomponent","primary_table_show_schema":"dbo.bom_opcomponent","primary_table_verbose":"bom_opcomponent (BOM子件资料)","primary_table_verbose_show_schema":"dbo.bom_opcomponent (BOM子件资料)","primary_table_object_id":"t4149","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"OpComponentId","foreign_column_path":null,"foreign_column":"OpComponentId"}],"custom_fields":{}},{"name":"FK_bom_opcomponentloc","title":null,"description":null,"is_user_defined":false,"foreign_table":"bom_opcomponentloc","foreign_table_show_schema":"dbo.bom_opcomponentloc","foreign_table_verbose":"bom_opcomponentloc (BOM子件定位符资料)","foreign_table_verbose_show_schema":"dbo.bom_opcomponentloc (BOM子件定位符资料)","foreign_table_object_id":"t4152","primary_table":"bom_opcomponent","primary_table_show_schema":"dbo.bom_opcomponent","primary_table_verbose":"bom_opcomponent (BOM子件资料)","primary_table_verbose_show_schema":"dbo.bom_opcomponent (BOM子件资料)","primary_table_object_id":"t4149","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"OpComponentId","foreign_column_path":null,"foreign_column":"OpComponentId"}],"custom_fields":{}},{"name":"fk_bom_opcomponent_bom_opcomponentscrap","title":"","description":"","is_user_defined":true,"foreign_table":"bom_opcomponentscrap","foreign_table_show_schema":"dbo.bom_opcomponentscrap","foreign_table_verbose":"bom_opcomponentscrap (BOM子件的阶梯损耗率)","foreign_table_verbose_show_schema":"dbo.bom_opcomponentscrap (BOM子件的阶梯损耗率)","foreign_table_object_id":"t4154","primary_table":"bom_opcomponent","primary_table_show_schema":"dbo.bom_opcomponent","primary_table_verbose":"bom_opcomponent (BOM子件资料)","primary_table_verbose_show_schema":"dbo.bom_opcomponent (BOM子件资料)","primary_table_object_id":"t4149","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"OpComponentId","foreign_column_path":null,"foreign_column":"OpComponentId"}],"custom_fields":{}},{"name":"FK_bom_opcomponentsub","title":null,"description":null,"is_user_defined":false,"foreign_table":"bom_opcomponentsub","foreign_table_show_schema":"dbo.bom_opcomponentsub","foreign_table_verbose":"bom_opcomponentsub (BOM子件替代料)","foreign_table_verbose_show_schema":"dbo.bom_opcomponentsub (BOM子件替代料)","foreign_table_object_id":"t4155","primary_table":"bom_opcomponent","primary_table_show_schema":"dbo.bom_opcomponent","primary_table_verbose":"bom_opcomponent (BOM子件资料)","primary_table_verbose_show_schema":"dbo.bom_opcomponent (BOM子件资料)","primary_table_object_id":"t4149","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"OpComponentId","foreign_column_path":null,"foreign_column":"OpComponentId"}],"custom_fields":{}}],"unique_keys":[{"name":"pk_bom_opcomponent","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"OpComponentId (子件ID 主键ID 自增量)","name":"OpComponentId (子件ID 主键ID 自增量)"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};