window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11535","name":"Inventory_AA_ColumnDicView","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE  VIEW [dbo].[Inventory_AA_ColumnDicView] AS SELECT cKey,cFld,cCaption,iColPos,cOrder,IsEnum,EnumType,EnumTypeString,ReferType,cPointBit,LocaleID,cCaptionPar from ufmeta_999..AA_ColumnDic_base  where LocaleID=DBO.UDF_GetLocaleID() and cKey='inventory' and cfld<>'selcol' and cfld<>'cinvcode'and cfld <> 'bProduceByFeatureAllocate' and (cfld not like '%name' or cfld='cinvname' or cfld='CEnglishName' or cfld\r\n='CcurrencyName' or cFld ='CNotPatentName') and cfld not in (select cDicDbName from userdef where cClass='存货' and isnull(cItemName,'')='') and cfld not in (select 'b'+substring(cDicDbName,2,6) from userdef where cClass='存货' and isnull(cItemName,'')='') and cfld not in (select 'bCheck'+substring(cDicDbName,2,6) from userdef where cClass='存货' and isnull(cItemName,'')='') and cfld not in (select 'bConfig'+substring(cDicDbName,2,6) from userdef where cClass='存货' and isnull(cItemName,'')='') and cfld not in (select 'bOMPrice'+substring(cDicDbName,2,6) from userdef where cClass='存货' and isnull(cItemName,'')='') and cfld not in (select 'bPurPrice'+substring(cDicDbName,2,6) from userdef where cClass='存货' and isnull(cItemName,'')='') and cfld not in (select 'bSalePrice'+substring(cDicDbName,2,6) from userdef where cClass='存货' and isnull(cItemName,'')='') and cfld not in (select 'bControl'+substring(cDicDbName,2,4)+'Range'+substring(cDicDbName,6,2) from userdef where cClass='存货' and isnull(cItemName,'')='') and cfld not in (select 'b'+substring(cDicDbName,2,15) from userdef where cClass='批次属性' and isnull(cItemName,'')='')","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Inventory_AA_ColumnDicView"},{"field":"Type","value":"View"}],"columns":[{"id":"column-236844","object_id":"column-236844","name":"cKey","name_without_path":"cKey","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-236845","object_id":"column-236845","name":"cFld","name_without_path":"cFld","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-236846","object_id":"column-236846","name":"cCaption","name_without_path":"cCaption","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-236847","object_id":"column-236847","name":"iColPos","name_without_path":"iColPos","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-236848","object_id":"column-236848","name":"cOrder","name_without_path":"cOrder","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-236849","object_id":"column-236849","name":"IsEnum","name_without_path":"IsEnum","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-236850","object_id":"column-236850","name":"EnumType","name_without_path":"EnumType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-236851","object_id":"column-236851","name":"EnumTypeString","name_without_path":"EnumTypeString","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-236852","object_id":"column-236852","name":"ReferType","name_without_path":"ReferType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-236853","object_id":"column-236853","name":"cPointBit","name_without_path":"cPointBit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-236854","object_id":"column-236854","name":"LocaleID","name_without_path":"LocaleID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"32","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-236855","object_id":"column-236855","name":"cCaptionPar","name_without_path":"cCaptionPar","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};