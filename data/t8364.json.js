window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t8364","name":"SR_ServiceBill","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"SR_ServiceBill"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-122482","object_id":"column-122482","name":"OID","name_without_path":"OID","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122483","object_id":"column-122483","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122484","object_id":"column-122484","name":"VT_ID","name_without_path":"VT_ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122485","object_id":"column-122485","name":"cSerBillCode","name_without_path":"cSerBillCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122486","object_id":"column-122486","name":"SerTypeID","name_without_path":"SerTypeID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t8377","name":"SR_ServiceType","name_show_schema":"dbo.SR_ServiceType"}]},{"id":"column-122487","object_id":"column-122487","name":"SerRequestID","name_without_path":"SerRequestID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122488","object_id":"column-122488","name":"cCusCode","name_without_path":"cCusCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122489","object_id":"column-122489","name":"cItemCode","name_without_path":"cItemCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122490","object_id":"column-122490","name":"cItemName","name_without_path":"cItemName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122491","object_id":"column-122491","name":"cItem_class","name_without_path":"cItem_class","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122492","object_id":"column-122492","name":"cItem_CName","name_without_path":"cItem_CName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122493","object_id":"column-122493","name":"cReqPersonCode","name_without_path":"cReqPersonCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t7326","name":"Person","name_show_schema":"dbo.Person"}]},{"id":"column-122494","object_id":"column-122494","name":"cReqDepCode","name_without_path":"cReqDepCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t4907","name":"Department","name_show_schema":"dbo.Department"}]},{"id":"column-122495","object_id":"column-122495","name":"ContactID","name_without_path":"ContactID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t4793","name":"Crm_Contact","name_show_schema":"dbo.Crm_Contact"}]},{"id":"column-122496","object_id":"column-122496","name":"SerStateID","name_without_path":"SerStateID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122497","object_id":"column-122497","name":"cInvCode","name_without_path":"cInvCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122498","object_id":"column-122498","name":"SerialNoID","name_without_path":"SerialNoID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122499","object_id":"column-122499","name":"fQuantity","name_without_path":"fQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122500","object_id":"column-122500","name":"SerModeID","name_without_path":"SerModeID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122501","object_id":"column-122501","name":"dReqDate","name_without_path":"dReqDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122502","object_id":"column-122502","name":"dReqTime","name_without_path":"dReqTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122503","object_id":"column-122503","name":"cReqContent","name_without_path":"cReqContent","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122504","object_id":"column-122504","name":"cSerPrincipalCode","name_without_path":"cSerPrincipalCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t7326","name":"Person","name_show_schema":"dbo.Person"}]},{"id":"column-122505","object_id":"column-122505","name":"cSerDepCode","name_without_path":"cSerDepCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t4907","name":"Department","name_show_schema":"dbo.Department"}]},{"id":"column-122506","object_id":"column-122506","name":"dIntendDate","name_without_path":"dIntendDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122507","object_id":"column-122507","name":"dIntendTime","name_without_path":"dIntendTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122508","object_id":"column-122508","name":"dArriveDate","name_without_path":"dArriveDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122509","object_id":"column-122509","name":"dArriveTime","name_without_path":"dArriveTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122510","object_id":"column-122510","name":"dCompletedDate","name_without_path":"dCompletedDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122511","object_id":"column-122511","name":"dCompletedTime","name_without_path":"dCompletedTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122512","object_id":"column-122512","name":"cExplain","name_without_path":"cExplain","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122513","object_id":"column-122513","name":"cCusAdvice","name_without_path":"cCusAdvice","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122514","object_id":"column-122514","name":"cExchName","name_without_path":"cExchName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t5567","name":"foreigncurrency","name_show_schema":"dbo.foreigncurrency"}]},{"id":"column-122515","object_id":"column-122515","name":"fExchRate","name_without_path":"fExchRate","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122516","object_id":"column-122516","name":"mChargeSum","name_without_path":"mChargeSum","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122517","object_id":"column-122517","name":"mNatChargeSum","name_without_path":"mNatChargeSum","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122518","object_id":"column-122518","name":"fDiscount","name_without_path":"fDiscount","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122519","object_id":"column-122519","name":"mDiscountSum","name_without_path":"mDiscountSum","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122520","object_id":"column-122520","name":"mNatDiscountSum","name_without_path":"mNatDiscountSum","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122521","object_id":"column-122521","name":"mGatheringSum","name_without_path":"mGatheringSum","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122522","object_id":"column-122522","name":"mNatGatheringSum","name_without_path":"mNatGatheringSum","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122523","object_id":"column-122523","name":"PreClosedStateID","name_without_path":"PreClosedStateID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122524","object_id":"column-122524","name":"cDefine1","name_without_path":"cDefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122525","object_id":"column-122525","name":"cDefine2","name_without_path":"cDefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122526","object_id":"column-122526","name":"cDefine3","name_without_path":"cDefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122527","object_id":"column-122527","name":"cDefine4","name_without_path":"cDefine4","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122528","object_id":"column-122528","name":"cDefine5","name_without_path":"cDefine5","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122529","object_id":"column-122529","name":"cDefine6","name_without_path":"cDefine6","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122530","object_id":"column-122530","name":"cDefine7","name_without_path":"cDefine7","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122531","object_id":"column-122531","name":"cDefine8","name_without_path":"cDefine8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122532","object_id":"column-122532","name":"cDefine9","name_without_path":"cDefine9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122533","object_id":"column-122533","name":"cDefine10","name_without_path":"cDefine10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122534","object_id":"column-122534","name":"cDefine11","name_without_path":"cDefine11","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122535","object_id":"column-122535","name":"cDefine12","name_without_path":"cDefine12","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122536","object_id":"column-122536","name":"cDefine13","name_without_path":"cDefine13","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122537","object_id":"column-122537","name":"cDefine14","name_without_path":"cDefine14","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122538","object_id":"column-122538","name":"cDefine15","name_without_path":"cDefine15","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122539","object_id":"column-122539","name":"cDefine16","name_without_path":"cDefine16","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122540","object_id":"column-122540","name":"cCreator","name_without_path":"cCreator","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122541","object_id":"column-122541","name":"dCreatedDate","name_without_path":"dCreatedDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122542","object_id":"column-122542","name":"cModifier","name_without_path":"cModifier","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122543","object_id":"column-122543","name":"dModifiedDate","name_without_path":"dModifiedDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122544","object_id":"column-122544","name":"ufts","name_without_path":"ufts","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122545","object_id":"column-122545","name":"bFeedback","name_without_path":"bFeedback","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122546","object_id":"column-122546","name":"cAgrCode","name_without_path":"cAgrCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122547","object_id":"column-122547","name":"Distor","name_without_path":"Distor","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122548","object_id":"column-122548","name":"DistDate","name_without_path":"DistDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122549","object_id":"column-122549","name":"mFreeSum","name_without_path":"mFreeSum","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122550","object_id":"column-122550","name":"mNatFreeSum","name_without_path":"mNatFreeSum","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122551","object_id":"column-122551","name":"mCompensateSum","name_without_path":"mCompensateSum","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122552","object_id":"column-122552","name":"mNatCompensateSum","name_without_path":"mNatCompensateSum","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122553","object_id":"column-122553","name":"dnVerifytime","name_without_path":"dnVerifytime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122554","object_id":"column-122554","name":"dVerifydate","name_without_path":"dVerifydate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122555","object_id":"column-122555","name":"cVerifier","name_without_path":"cVerifier","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122556","object_id":"column-122556","name":"cInitOID","name_without_path":"cInitOID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"80","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122557","object_id":"column-122557","name":"iverifystateex","name_without_path":"iverifystateex","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122558","object_id":"column-122558","name":"ireturncount","name_without_path":"ireturncount","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122559","object_id":"column-122559","name":"IsWfControlled","name_without_path":"IsWfControlled","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122560","object_id":"column-122560","name":"cVT_TmpSets","name_without_path":"cVT_TmpSets","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"400","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122561","object_id":"column-122561","name":"iVTSet_ID","name_without_path":"iVTSet_ID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122562","object_id":"column-122562","name":"cModType","name_without_path":"cModType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122563","object_id":"column-122563","name":"iPrintCount","name_without_path":"iPrintCount","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122564","object_id":"column-122564","name":"cCleanVer","name_without_path":"cCleanVer","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-122565","object_id":"column-122565","name":"cSysBarCode","name_without_path":"cSysBarCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_SR_ServiceBill_Crm_Contact","title":null,"description":null,"is_user_defined":false,"foreign_table":"SR_ServiceBill","foreign_table_show_schema":"dbo.SR_ServiceBill","foreign_table_verbose":"SR_ServiceBill","foreign_table_verbose_show_schema":"dbo.SR_ServiceBill","foreign_table_object_id":"t8364","primary_table":"Crm_Contact","primary_table_show_schema":"dbo.Crm_Contact","primary_table_verbose":"Crm_Contact","primary_table_verbose_show_schema":"dbo.Crm_Contact","primary_table_object_id":"t4793","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cContactCode","foreign_column_path":null,"foreign_column":"ContactID"}],"custom_fields":{}},{"name":"FK_SR_Servicebill_Department_Req","title":null,"description":null,"is_user_defined":false,"foreign_table":"SR_ServiceBill","foreign_table_show_schema":"dbo.SR_ServiceBill","foreign_table_verbose":"SR_ServiceBill","foreign_table_verbose_show_schema":"dbo.SR_ServiceBill","foreign_table_object_id":"t8364","primary_table":"Department","primary_table_show_schema":"dbo.Department","primary_table_verbose":"Department","primary_table_verbose_show_schema":"dbo.Department","primary_table_object_id":"t4907","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cDepCode","foreign_column_path":null,"foreign_column":"cReqDepCode"}],"custom_fields":{}},{"name":"FK_SR_Servicebill_Department_Ser","title":null,"description":null,"is_user_defined":false,"foreign_table":"SR_ServiceBill","foreign_table_show_schema":"dbo.SR_ServiceBill","foreign_table_verbose":"SR_ServiceBill","foreign_table_verbose_show_schema":"dbo.SR_ServiceBill","foreign_table_object_id":"t8364","primary_table":"Department","primary_table_show_schema":"dbo.Department","primary_table_verbose":"Department","primary_table_verbose_show_schema":"dbo.Department","primary_table_object_id":"t4907","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cDepCode","foreign_column_path":null,"foreign_column":"cSerDepCode"}],"custom_fields":{}},{"name":"FK_SR_ServiceBill_ForeignCurrency","title":null,"description":null,"is_user_defined":false,"foreign_table":"SR_ServiceBill","foreign_table_show_schema":"dbo.SR_ServiceBill","foreign_table_verbose":"SR_ServiceBill","foreign_table_verbose_show_schema":"dbo.SR_ServiceBill","foreign_table_object_id":"t8364","primary_table":"foreigncurrency","primary_table_show_schema":"dbo.foreigncurrency","primary_table_verbose":"foreigncurrency","primary_table_verbose_show_schema":"dbo.foreigncurrency","primary_table_object_id":"t5567","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cexch_name","foreign_column_path":null,"foreign_column":"cExchName"}],"custom_fields":{}},{"name":"FK_SR_Servicebill_Person_Req","title":null,"description":null,"is_user_defined":false,"foreign_table":"SR_ServiceBill","foreign_table_show_schema":"dbo.SR_ServiceBill","foreign_table_verbose":"SR_ServiceBill","foreign_table_verbose_show_schema":"dbo.SR_ServiceBill","foreign_table_object_id":"t8364","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person","primary_table_verbose_show_schema":"dbo.Person","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cReqPersonCode"}],"custom_fields":{}},{"name":"FK_SR_Servicebill_Person_Ser","title":null,"description":null,"is_user_defined":false,"foreign_table":"SR_ServiceBill","foreign_table_show_schema":"dbo.SR_ServiceBill","foreign_table_verbose":"SR_ServiceBill","foreign_table_verbose_show_schema":"dbo.SR_ServiceBill","foreign_table_object_id":"t8364","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person","primary_table_verbose_show_schema":"dbo.Person","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cSerPrincipalCode"}],"custom_fields":{}},{"name":"FK_SR_ServiceBill_SR_ServiceType","title":null,"description":null,"is_user_defined":false,"foreign_table":"SR_ServiceBill","foreign_table_show_schema":"dbo.SR_ServiceBill","foreign_table_verbose":"SR_ServiceBill","foreign_table_verbose_show_schema":"dbo.SR_ServiceBill","foreign_table_object_id":"t8364","primary_table":"SR_ServiceType","primary_table_show_schema":"dbo.SR_ServiceType","primary_table_verbose":"SR_ServiceType","primary_table_verbose_show_schema":"dbo.SR_ServiceType","primary_table_object_id":"t8377","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cSerTypeCode","foreign_column_path":null,"foreign_column":"SerTypeID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_SR_SERVICEBILL","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"OID","name":"OID"}],"custom_fields":{}},{"name":"INDEX_SR_ServiceBill_Code","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"cSerBillCode","name":"cSerBillCode"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};