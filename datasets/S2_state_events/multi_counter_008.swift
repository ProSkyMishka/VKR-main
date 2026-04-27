import SwiftUI

struct ContentView: View {
    @State private var a = 0
    @State private var b = 0
    @State private var c = 0

    var body: some View {
        VStack(spacing: 8) {
            Text("mc008-a: \(a)")
            Text("mc008-b: \(b)")
            Text("mc008-c: \(c)")
            HStack {
                Button("mc008-incA") { a += 1 }
                Button("mc008-incB") { b += 2 }
                Button("mc008-incC") { c += 3 }
            }
            HStack {
                Button("mc008-rstA") { a = 0 }
                Button("mc008-rstB") { b = 0 }
                Button("mc008-rstC") { c = 0 }
            }
        }
        .padding()
    }
}
