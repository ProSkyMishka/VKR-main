import SwiftUI

struct Editbsa002: View {
    @Binding var text: String
    var body: some View {
        Button("bsa002-append") { text += "x" }
    }
}

struct ContentView: View {
    @State private var s = "bsa002-init"
    var body: some View {
        VStack {
            Text(s)
            Editbsa002(text: $s)
        }
        .padding()
    }
}
