import SwiftUI

struct Childbi004: View {
    @Binding var n: Int
    var body: some View {
        Button("bi004-childInc") { n += 1 }
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("bi004-total: \(n)")
            Childbi004(n: $n)
        }
        .padding()
    }
}
