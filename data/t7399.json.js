window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t7399","name":"pl_CO_InventoryNum_Details","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"pl_CO_InventoryNum_Details"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-101647","object_id":"column-101647","name":"iPeriod","name_without_path":"iPeriod","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-101648","object_id":"column-101648","name":"cInvCode","name_without_path":"cInvCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-101649","object_id":"column-101649","name":"cWarhouse","name_without_path":"cWarhouse","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-101650","object_id":"column-101650","name":"iDimension","name_without_path":"iDimension","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-101651","object_id":"column-101651","name":"cRdCode","name_without_path":"cRdCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-101652","object_id":"column-101652","name":"iNum","name_without_path":"iNum","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-101653","object_id":"column-101653","name":"iPartId","name_without_path":"iPartId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-101654","object_id":"column-101654","name":"bOverYearQC","name_without_path":"bOverYearQC","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-101655","object_id":"column-101655","name":"iINum_FX","name_without_path":"iINum_FX","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-101656","object_id":"column-101656","name":"fInvStdCost","name_without_path":"fInvStdCost","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"34, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-101657","object_id":"column-101657","name":"fLbrStdCost","name_without_path":"fLbrStdCost","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"34, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-101658","object_id":"column-101658","name":"fManuFixStdCost","name_without_path":"fManuFixStdCost","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"34, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-101659","object_id":"column-101659","name":"fManuVarStdCost","name_without_path":"fManuVarStdCost","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"34, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-101660","object_id":"column-101660","name":"fOmStdCost","name_without_path":"fOmStdCost","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"34, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"unique_keys":[{"name":"PK_pl_CO_InventoryNum_Details","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"iPeriod","name":"iPeriod"},{"path":null,"name_without_path":"iPartId","name":"iPartId"},{"path":null,"name_without_path":"cRdCode","name":"cRdCode"},{"path":null,"name_without_path":"cWarhouse","name":"cWarhouse"},{"path":null,"name_without_path":"iDimension","name":"iDimension"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};