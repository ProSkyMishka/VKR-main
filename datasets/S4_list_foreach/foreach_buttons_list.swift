import SwiftUI
struct ContentView: View {
    let labels = ["First", "Second", "Third"]
    @State private var selected = ""
    var body: some View {
        List(labels, id: \.self) { label in
            Button(label) { selected = label }
        }
        Text("Selected: \(selected)")
    }
}
