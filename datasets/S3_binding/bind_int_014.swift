import SwiftUI

struct Childbi014: View {
    @Binding var n: Int
    var body: some View {
        Button("bi014-childInc") { n += 1 }
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("bi014-total: \(n)")
            Childbi014(n: $n)
        }
        .padding()
    }
}
