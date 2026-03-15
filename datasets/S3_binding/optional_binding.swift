import SwiftUI
struct EditField: View {
    @Binding var text: String
    var body: some View {
        TextField("", text: $text).padding(8)
    }
}
struct ContentView: View {
    @State private var text = "Edit me"
    var body: some View {
        VStack {
            EditField(text: $text)
            Text("Length: \(text.count)")
        }
    }
}
