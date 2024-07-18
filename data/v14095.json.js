window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14095","name":"v_vouchertemplates","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW [dbo].[v_vouchertemplates]    \r\n  \r\nAS    \r\n  \r\nSELECT  dbo.vouchertemplates_base.VT_ID, \r\ndbo.vouchertemplates_base.VT_CardNumber, \r\ndbo.vouchertemplates_base.VT_TemplateMode,     \r\ndbo.vouchertemplates_base.VT_Width, \r\ndbo.vouchertemplates_base.VT_Height, \r\ndbo.vouchertemplates_base.VT_BodyWidth,     \r\ndbo.vouchertemplates_base.VT_BodyHeight, \r\ndbo.vouchertemplates_base.VT_SelfDef1, \r\ndbo.vouchertemplates_base.VT_SelfDef2,     \r\ndbo.vouchertemplates_base.VT_SelfDef3, \r\ndbo.vouchertemplates_base.VT_Memo,\r\n dbo.vouchertemplates_base.VT_Lock,     \r\ndbo.vouchertemplates_base.VT_TitleTop, \r\ndbo.vouchertemplates_base.VT_TitleLeft, \r\ndbo.vouchertemplates_base.VT_PageHeader,     \r\ndbo.vouchertemplates_base.VT_BodyFixedCols, \r\ndbo.vouchertemplates_base.VT_BodyMaxRows, \r\ndbo.vouchertemplates_base.VT_GridStyle,     \r\ndbo.vouchertemplates_base.VT_WorkAreaColor, \r\ndbo.vouchertemplates_base.VT_FiexdColor, \r\ndbo.vouchertemplates_base.VT_TotalColor,     \r\ndbo.vouchertemplates_base.VT_ControlStyle, \r\ndbo.vouchertemplates_lang.vt_gridstylehead, \r\ndbo.vouchertemplates_lang.vt_gridstylebody,     \r\ndbo.vouchertemplates_lang.vt_gridstyletotal,\r\n dbo.vouchertemplates_base.VT_GridPrnRows, \r\n dbo.vouchertemplates_base.VT_GridPrnRowHeight,     \r\ndbo.vouchertemplates_lang.vt_header, \r\ndbo.vouchertemplates_lang.vt_footheaderfont, \r\ndbo.vouchertemplates_base.VT_PrintTemplID,     \r\ndbo.vouchertemplates_base.VT_AutoCalc,\r\n dbo.vouchertemplates_base.VT_PageSubTotal, \r\n dbo.vouchertemplates_base.VT_PageTotal,     \r\ndbo.vouchertemplates_base.VT_PrintGrid, \r\ndbo.vouchertemplates_base.nAutoCalcWidth, \r\ndbo.vouchertemplates_base.nPrintSeril,     \r\ndbo.vouchertemplates_base.nPrintGridLine,\r\n dbo.vouchertemplates_base.varPrintSetting, \r\n dbo.vouchertemplates_base.pubufts,     \r\ndbo.vouchertemplates_base.VT_RowLayoutEnabled,\r\n dbo.vouchertemplates_lang.vt_name,\r\n  dbo.vouchertemplates_lang.localeid,     \r\ndbo.vouchertemplates_lang.vt_titlename, \r\ndbo.vouchertemplates_lang.vt_titlefontstate,\r\n dbo.vouchertemplates_lang.vt_foot,     \r\ndbo.vouchertemplates_base.VT_BodyTop,\r\n dbo.vouchertemplates_base.VT_BodyLeft,\r\n  dbo.vouchertemplates_lang.ufts,     \r\ndbo.vouchertemplates_base.VT_ReservedInfo, \r\ndbo.vouchertemplates_base.VT_xamlField,\r\n dbo.vouchertemplates_base.VT_AmongColor,\r\ndbo.vouchertemplates_base.templateSubType,\r\nvouchertemplates_base.nbarcodeMultiple,\r\nvouchertemplates_base.nbarqrcodeMultiple    \r\nFROM dbo.vouchertemplates_base \r\nLEFT OUTER JOIN dbo.vouchertemplates_lang \r\nON dbo.vouchertemplates_base.VT_ID = dbo.vouchertemplates_lang.vt_id","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_vouchertemplates"},{"field":"Type","value":"View"}],"columns":[{"id":"column-415152","object_id":"column-415152","name":"VT_ID","name_without_path":"VT_ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415153","object_id":"column-415153","name":"VT_CardNumber","name_without_path":"VT_CardNumber","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415154","object_id":"column-415154","name":"VT_TemplateMode","name_without_path":"VT_TemplateMode","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415155","object_id":"column-415155","name":"VT_Width","name_without_path":"VT_Width","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415156","object_id":"column-415156","name":"VT_Height","name_without_path":"VT_Height","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415157","object_id":"column-415157","name":"VT_BodyWidth","name_without_path":"VT_BodyWidth","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415158","object_id":"column-415158","name":"VT_BodyHeight","name_without_path":"VT_BodyHeight","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415159","object_id":"column-415159","name":"VT_SelfDef1","name_without_path":"VT_SelfDef1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415160","object_id":"column-415160","name":"VT_SelfDef2","name_without_path":"VT_SelfDef2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415161","object_id":"column-415161","name":"VT_SelfDef3","name_without_path":"VT_SelfDef3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415162","object_id":"column-415162","name":"VT_Memo","name_without_path":"VT_Memo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415163","object_id":"column-415163","name":"VT_Lock","name_without_path":"VT_Lock","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415164","object_id":"column-415164","name":"VT_TitleTop","name_without_path":"VT_TitleTop","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415165","object_id":"column-415165","name":"VT_TitleLeft","name_without_path":"VT_TitleLeft","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415166","object_id":"column-415166","name":"VT_PageHeader","name_without_path":"VT_PageHeader","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415167","object_id":"column-415167","name":"VT_BodyFixedCols","name_without_path":"VT_BodyFixedCols","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415168","object_id":"column-415168","name":"VT_BodyMaxRows","name_without_path":"VT_BodyMaxRows","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415169","object_id":"column-415169","name":"VT_GridStyle","name_without_path":"VT_GridStyle","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415170","object_id":"column-415170","name":"VT_WorkAreaColor","name_without_path":"VT_WorkAreaColor","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415171","object_id":"column-415171","name":"VT_FiexdColor","name_without_path":"VT_FiexdColor","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415172","object_id":"column-415172","name":"VT_TotalColor","name_without_path":"VT_TotalColor","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415173","object_id":"column-415173","name":"VT_ControlStyle","name_without_path":"VT_ControlStyle","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415174","object_id":"column-415174","name":"vt_gridstylehead","name_without_path":"vt_gridstylehead","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415175","object_id":"column-415175","name":"vt_gridstylebody","name_without_path":"vt_gridstylebody","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415176","object_id":"column-415176","name":"vt_gridstyletotal","name_without_path":"vt_gridstyletotal","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415177","object_id":"column-415177","name":"VT_GridPrnRows","name_without_path":"VT_GridPrnRows","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415178","object_id":"column-415178","name":"VT_GridPrnRowHeight","name_without_path":"VT_GridPrnRowHeight","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415179","object_id":"column-415179","name":"vt_header","name_without_path":"vt_header","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415180","object_id":"column-415180","name":"vt_footheaderfont","name_without_path":"vt_footheaderfont","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415181","object_id":"column-415181","name":"VT_PrintTemplID","name_without_path":"VT_PrintTemplID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415182","object_id":"column-415182","name":"VT_AutoCalc","name_without_path":"VT_AutoCalc","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415183","object_id":"column-415183","name":"VT_PageSubTotal","name_without_path":"VT_PageSubTotal","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415184","object_id":"column-415184","name":"VT_PageTotal","name_without_path":"VT_PageTotal","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415185","object_id":"column-415185","name":"VT_PrintGrid","name_without_path":"VT_PrintGrid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415186","object_id":"column-415186","name":"nAutoCalcWidth","name_without_path":"nAutoCalcWidth","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415187","object_id":"column-415187","name":"nPrintSeril","name_without_path":"nPrintSeril","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415188","object_id":"column-415188","name":"nPrintGridLine","name_without_path":"nPrintGridLine","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415189","object_id":"column-415189","name":"varPrintSetting","name_without_path":"varPrintSetting","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"3000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415190","object_id":"column-415190","name":"pubufts","name_without_path":"pubufts","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415191","object_id":"column-415191","name":"VT_RowLayoutEnabled","name_without_path":"VT_RowLayoutEnabled","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415192","object_id":"column-415192","name":"vt_name","name_without_path":"vt_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415193","object_id":"column-415193","name":"localeid","name_without_path":"localeid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"32","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415194","object_id":"column-415194","name":"vt_titlename","name_without_path":"vt_titlename","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415195","object_id":"column-415195","name":"vt_titlefontstate","name_without_path":"vt_titlefontstate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415196","object_id":"column-415196","name":"vt_foot","name_without_path":"vt_foot","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415197","object_id":"column-415197","name":"VT_BodyTop","name_without_path":"VT_BodyTop","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415198","object_id":"column-415198","name":"VT_BodyLeft","name_without_path":"VT_BodyLeft","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415199","object_id":"column-415199","name":"ufts","name_without_path":"ufts","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415200","object_id":"column-415200","name":"VT_ReservedInfo","name_without_path":"VT_ReservedInfo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415201","object_id":"column-415201","name":"VT_xamlField","name_without_path":"VT_xamlField","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415202","object_id":"column-415202","name":"VT_AmongColor","name_without_path":"VT_AmongColor","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415203","object_id":"column-415203","name":"templateSubType","name_without_path":"templateSubType","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415204","object_id":"column-415204","name":"nbarcodeMultiple","name_without_path":"nbarcodeMultiple","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-415205","object_id":"column-415205","name":"nbarqrcodeMultiple","name_without_path":"nbarqrcodeMultiple","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};