import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            ForEach(0..<17, id: \.self) { k in
                Text("fs013-row \(k)")
            }
        }
    }
}
