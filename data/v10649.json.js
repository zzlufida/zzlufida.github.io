window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10649","name":"EQ_VInvList","subtype":"VIEW","is_user_defined":false,"description":null,"script":"Create View EQ_VInvList\r\nAS\r\n\tSELECT \r\n\t--设备编码\r\n\tEQ_EQData.cEQCode,\r\n\t--设备名称\r\n\tEQ_EQData.cEQName,\r\n\t--设备类型编码\r\n\tEQ_EQType.cEQTypeCode as cEQTypeCode, \r\n\t--设备类型名称 \r\n\tEQ_EQType.cEQTypeName as cEQTypeName,\r\n\t--备件类型编码(intInvType):1关键件、2一般件、3 易损件(只在设备备件清单中使用) \r\n\tEQ_ListInventory.intInvType as cTypeCode,\r\n\t--备件类型名称(intInvType):1关键件、2一般件、3 易损件(只在设备备件清单中使用)  \r\n\tcase when EQ_ListInventory.intInvType=1 then '关键件' \r\n\t\telse case when EQ_ListInventory.intInvType=2 then '一般件'  \r\n\t\telse '易损件' end end as cTypeName,\r\n\t--备件编码\r\n\tEQ_ListInventory.cInvCode as cInvCode,\r\n\t--备件名称\r\n\tInventory.cInvName as cInvName,\r\n\t--规格型号 \r\n\tInventory.cInvStd as cgg,\r\n\t--仓库编码\r\n\tEQ_ListInventory.cWhCode as cWhCode, \r\n\t--仓库名称\r\n\tWarehouse.cWhName as cWhName,\r\n\t--计量单位编码\r\n\tEQ_ListInventory.cJldw as cJldw, \r\n\t--计量单位名称\r\n\tComputationUnit.cComUnitName as cComUnitName,\r\n\t--数量 \r\n\tEQ_ListInventory.fValue as fValue, \r\n\t--结存数量\r\n\tisnull(CurrentStock.iQuantity,0) as iQuantity,\r\n\t--安全库存量 \r\n\tisnull(Inventory.iSafeNum,0) as iSafeNum,\r\n\t--低于安全库存量\r\n\t(isnull(Inventory.iSafeNum,0)-isnull(CurrentStock.iQuantity,0)) as iLowerSafeNum\r\n\tFROM EQ_ListInventory \r\n\t\tinner join EQ_EQType ON EQ_EQType.cEQTypeCode = EQ_ListInventory.cEQTypeCode\r\n\t\tinner join EQ_EQData ON EQ_EQData.cEQTypeCode = EQ_EQType.cEQTypeCode\r\n\t\tLEFT JOIN Warehouse ON EQ_ListInventory.cWhCode = Warehouse.cWhCode \r\n\t\tLEFT JOIN ComputationUnit ON EQ_ListInventory.cJldw = ComputationUnit.cComunitCode \r\n\t\tLEFT JOIN Inventory ON EQ_ListInventory.cInvCode = Inventory.cInvCode\r\n\t\tLeft Join CurrentStock on Inventory.cInvCode = CurrentStock.cInvCode\r\n\t\t\tand CurrentStock.cWhCode = Warehouse.cWhcode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"EQ_VInvList"},{"field":"Type","value":"View"}],"columns":[{"id":"column-199401","object_id":"column-199401","name":"cEQCode","name_without_path":"cEQCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199402","object_id":"column-199402","name":"cEQName","name_without_path":"cEQName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199403","object_id":"column-199403","name":"cEQTypeCode","name_without_path":"cEQTypeCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199404","object_id":"column-199404","name":"cEQTypeName","name_without_path":"cEQTypeName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199405","object_id":"column-199405","name":"cTypeCode","name_without_path":"cTypeCode","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199406","object_id":"column-199406","name":"cTypeName","name_without_path":"cTypeName","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199407","object_id":"column-199407","name":"cInvCode","name_without_path":"cInvCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199408","object_id":"column-199408","name":"cInvName","name_without_path":"cInvName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199409","object_id":"column-199409","name":"cgg","name_without_path":"cgg","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199410","object_id":"column-199410","name":"cWhCode","name_without_path":"cWhCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199411","object_id":"column-199411","name":"cWhName","name_without_path":"cWhName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199412","object_id":"column-199412","name":"cJldw","name_without_path":"cJldw","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"70","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199413","object_id":"column-199413","name":"cComUnitName","name_without_path":"cComUnitName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199414","object_id":"column-199414","name":"fValue","name_without_path":"fValue","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199415","object_id":"column-199415","name":"iQuantity","name_without_path":"iQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199416","object_id":"column-199416","name":"iSafeNum","name_without_path":"iSafeNum","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199417","object_id":"column-199417","name":"iLowerSafeNum","name_without_path":"iLowerSafeNum","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};