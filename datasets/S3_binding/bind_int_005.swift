import SwiftUI

struct Childbi005: View {
    @Binding var n: Int
    var body: some View {
        Button("bi005-childInc") { n += 1 }
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("bi005-total: \(n)")
            Childbi005(n: $n)
        }
        .padding()
    }
}
