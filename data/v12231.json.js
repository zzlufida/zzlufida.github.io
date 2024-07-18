window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12231","name":"SA_OrderTraceQuery","subtype":"VIEW","is_user_defined":false,"description":null,"script":"Create VIEW SA_OrderTraceQuery\r\nAS\r\nSELECT     SA_OrderTraceQuery_Base.cItemCode, SA_OrderTraceQuery_Base.cDataType, SA_OrderTraceQuery_Base.cIsPlan, \r\n                      SA_OrderTraceQuery_Base.cPBeginDateField, SA_OrderTraceQuery_Base.cPEndDateField, SA_OrderTraceQuery_Base.cEarlyMakeDateField, \r\n                      SA_OrderTraceQuery_Base.cEarlyAuditDateField, SA_OrderTraceQuery_Base.cLastMakeDateField, SA_OrderTraceQuery_Base.cLastAuditDateField, \r\n                      SA_OrderTraceQuery_Base.cSource, SA_OrderTraceQuery_Base.cSourcePlan, SA_OrderTraceQuery_Base.cWhere, \r\n                      SA_OrderTraceQuery_Base.cWherePlan, SA_OrderTraceQuery_Base.cOrder, SA_OrderTraceQuery_Base.cOrderPlan, \r\n                      SA_OrderTraceQuery_Base.cSTChoice, SA_OrderTraceQuery_Base.cCloserField, SA_OrderTraceQuery_Base.cSOIDField, \r\n                      SA_OrderTraceQuery_Base.cSOIDFieldPlan, SA_OrderTraceQuery_Base.cBillField, SA_OrderTraceQuery_Base.cCardNumber, \r\n                      SA_OrderTraceQuery_Base.cBodyIDField, SA_OrderTraceQuery_Base.cBillTypeField, SA_OrderTraceQuery_Base.cSoTypeField, \r\n                      SA_OrderTraceQuery_Base.cSoCodeField, SA_OrderTraceQuery_Base.cVoucherTypeField, SA_OrderTraceQuery_Lang.cReturnField, \r\n                      SA_OrderTraceQuery_Lang.Localeid\r\nFROM         SA_OrderTraceQuery_Base INNER JOIN\r\n                      SA_OrderTraceQuery_Lang ON SA_OrderTraceQuery_Base.cItemCode = SA_OrderTraceQuery_Lang.cItemCode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"SA_OrderTraceQuery"},{"field":"Type","value":"View"}],"columns":[{"id":"column-288822","object_id":"column-288822","name":"cItemCode","name_without_path":"cItemCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-288823","object_id":"column-288823","name":"cDataType","name_without_path":"cDataType","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-288824","object_id":"column-288824","name":"cIsPlan","name_without_path":"cIsPlan","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-288825","object_id":"column-288825","name":"cPBeginDateField","name_without_path":"cPBeginDateField","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-288826","object_id":"column-288826","name":"cPEndDateField","name_without_path":"cPEndDateField","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-288827","object_id":"column-288827","name":"cEarlyMakeDateField","name_without_path":"cEarlyMakeDateField","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-288828","object_id":"column-288828","name":"cEarlyAuditDateField","name_without_path":"cEarlyAuditDateField","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-288829","object_id":"column-288829","name":"cLastMakeDateField","name_without_path":"cLastMakeDateField","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-288830","object_id":"column-288830","name":"cLastAuditDateField","name_without_path":"cLastAuditDateField","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-288831","object_id":"column-288831","name":"cSource","name_without_path":"cSource","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-288832","object_id":"column-288832","name":"cSourcePlan","name_without_path":"cSourcePlan","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-288833","object_id":"column-288833","name":"cWhere","name_without_path":"cWhere","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-288834","object_id":"column-288834","name":"cWherePlan","name_without_path":"cWherePlan","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-288835","object_id":"column-288835","name":"cOrder","name_without_path":"cOrder","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-288836","object_id":"column-288836","name":"cOrderPlan","name_without_path":"cOrderPlan","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-288837","object_id":"column-288837","name":"cSTChoice","name_without_path":"cSTChoice","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"1","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-288838","object_id":"column-288838","name":"cCloserField","name_without_path":"cCloserField","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-288839","object_id":"column-288839","name":"cSOIDField","name_without_path":"cSOIDField","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-288840","object_id":"column-288840","name":"cSOIDFieldPlan","name_without_path":"cSOIDFieldPlan","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-288841","object_id":"column-288841","name":"cBillField","name_without_path":"cBillField","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-288842","object_id":"column-288842","name":"cCardNumber","name_without_path":"cCardNumber","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-288843","object_id":"column-288843","name":"cBodyIDField","name_without_path":"cBodyIDField","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-288844","object_id":"column-288844","name":"cBillTypeField","name_without_path":"cBillTypeField","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-288845","object_id":"column-288845","name":"cSoTypeField","name_without_path":"cSoTypeField","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-288846","object_id":"column-288846","name":"cSoCodeField","name_without_path":"cSoCodeField","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-288847","object_id":"column-288847","name":"cVoucherTypeField","name_without_path":"cVoucherTypeField","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-288848","object_id":"column-288848","name":"cReturnField","name_without_path":"cReturnField","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"3000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-288849","object_id":"column-288849","name":"Localeid","name_without_path":"Localeid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};