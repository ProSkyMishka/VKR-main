import SwiftUI

struct Childbi006: View {
    @Binding var n: Int
    var body: some View {
        Button("bi006-childInc") { n += 1 }
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("bi006-total: \(n)")
            Childbi006(n: $n)
        }
        .padding()
    }
}
