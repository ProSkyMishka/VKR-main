import SwiftUI

struct Childbi003: View {
    @Binding var n: Int
    var body: some View {
        Button("bi003-childInc") { n += 1 }
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("bi003-total: \(n)")
            Childbi003(n: $n)
        }
        .padding()
    }
}
