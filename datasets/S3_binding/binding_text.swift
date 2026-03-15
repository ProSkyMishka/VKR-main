import SwiftUI

struct EditView: View {
    @Binding var text: String

    var body: some View {
        TextField("Name", text: $text)
            .padding()
    }
}

struct ContentView: View {
    @State private var name = ""

    var body: some View {
        VStack {
            EditView(text: $name)
            Text("Hello, \(name)")
        }
    }
}
