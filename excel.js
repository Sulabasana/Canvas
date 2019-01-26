//Add blank row top export

Loop While Not Cells(iRow, iCol).Text = ""
'



End Sub
Sub AddBlankRowTopExport()


'
Dim iRow As Integer, iCol As Integer
Dim iRow2 As Integer, iCol2 As Integer
Dim iRow3 As Integer, iCol3 As Integer
Dim iRow4 As Integer, iCol4 As Integer
Dim oRng As Range
Dim oRng2 As Range
Dim oRng3 As Range
Dim oRng4 As Range


Set oRng = Range("d2")
Set oRng2 = Range("e2")
Set oRng3 = Range("f2")
Set oRng4 = Range("g2")

iRow = oRng.Row
iCol = oRng.Column
iRow2 = oRng2.Row
iCol2 = oRng2.Column
iRow3 = oRng3.Row
iCol3 = oRng3.Column
iRow4 = oRng4.Row
iCol4 = oRng4.Column

Do
'
If Cells(iRow + 1, iCol) <> Cells(iRow, iCol) Or Cells(iRow2 + 1, iCol2) <> Cells(iRow2, iCol2) Or Cells(iRow3 + 1, iCol3) <> Cells(iRow3, iCol3) Or Cells(iRow4 + 1, iCol4) <> Cells(iRow4, iCol4) Then
    Cells(iRow + 1, iCol).EntireRow.Insert shift:=xlDown
    iRow = iRow + 2
    iRow2 = iRow2 + 2
    iRow3 = iRow3 + 2
    iRow4 = iRow4 + 2

Else
    iRow = iRow + 1
    iRow2 = iRow2 + 1
    iRow3 = iRow3 + 1
    iRow4 = iRow4 + 1
    End If
'
Loop While Not Cells(iRow, iCol).Text = ""
'



End Sub


//Add Blank Row

Sub AddBlankRowTop()


'
Dim iRow As Integer, iCol As Integer
Dim iRow2 As Integer, iCol2 As Integer
Dim iRow3 As Integer, iCol3 As Integer
Dim oRng As Range
Dim oRng2 As Range
Dim oRng3 As Range


Set oRng = Range("d2")
Set oRng2 = Range("e2")
Set oRng3 = Range("f2")

iRow = oRng.Row
iCol = oRng.Column
iRow2 = oRng2.Row
iCol2 = oRng2.Column
iRow3 = oRng3.Row
iCol3 = oRng3.Column

Do
'
If Cells(iRow + 1, iCol) <> Cells(iRow, iCol) Or Cells(iRow2 + 1, iCol2) <> Cells(iRow2, iCol2) Or Cells(iRow3 + 1, iCol3) <> Cells(iRow3, iCol3) Then
    Cells(iRow + 1, iCol).EntireRow.Insert shift:=xlDown
    iRow = iRow + 2
    iRow2 = iRow2 + 2
    iRow3 = iRow3 + 2

Else
    iRow = iRow + 1
    iRow2 = iRow2 + 1
    iRow3 = iRow3 + 1
    End If
'
Loop While Not Cells(iRow, iCol).Text = ""
'



End Sub
Sub AddBlankRowTopExport()


'
Dim iRow As Integer, iCol As Integer
Dim iRow2 As Integer, iCol2 As Integer
Dim iRow3 As Integer, iCol3 As Integer
Dim iRow4 As Integer, iCol4 As Integer
Dim oRng As Range
Dim oRng2 As Range
Dim oRng3 As Range
Dim oRng4 As Range


Set oRng = Range("d2")
Set oRng2 = Range("e2")
Set oRng3 = Range("f2")
Set oRng4 = Range("g2")

iRow = oRng.Row
iCol = oRng.Column
iRow2 = oRng2.Row
iCol2 = oRng2.Column
iRow3 = oRng3.Row
iCol3 = oRng3.Column
iRow4 = oRng4.Row
iCol4 = oRng4.Column

Do
'
If Cells(iRow + 1, iCol) <> Cells(iRow, iCol) Or Cells(iRow2 + 1, iCol2) <> Cells(iRow2, iCol2) Or Cells(iRow3 + 1, iCol3) <> Cells(iRow3, iCol3) Or Cells(iRow4 + 1, iCol4) <> Cells(iRow4, iCol4) Then
    Cells(iRow + 1, iCol).EntireRow.Insert shift:=xlDown
    iRow = iRow + 2
    iRow2 = iRow2 + 2
    iRow3 = iRow3 + 2
    iRow4 = iRow4 + 2

Else
    iRow = iRow + 1
    iRow2 = iRow2 + 1
    iRow3 = iRow3 + 1
    iRow4 = iRow4 + 1
    End If
'
Loop While Not Cells(iRow, iCol).Text = ""
'



End Sub
